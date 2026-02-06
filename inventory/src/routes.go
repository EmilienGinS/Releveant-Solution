package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
)

// Routeur pour l'ensemble de nos routes

//go:embed all:www/*
var staticFiles embed.FS

func router() http.Handler {

	staticFS, err := fs.Sub(staticFiles, "www")
    if err != nil {
        log.Fatal("fs.Sub erreur:", err)
    }

	mux := http.NewServeMux()
	// Routes de test
	mux.HandleFunc("GET /health", HealthHandle)

	// Routes techniques
	mux.HandleFunc("GET /cpu", CPUHandler)
	mux.HandleFunc("GET /ps", PSHandler)
	mux.HandleFunc("GET /ps/{user}", PSUserHandler)
	mux.HandleFunc("GET /ps/kill/{pid}", PSKillHandler)
	mux.HandleFunc("GET /net", NetHandler)
	mux.HandleFunc("GET /net/{card}", NetNameHandler)
	mux.HandleFunc("GET /mem", MemHandler)
	mux.HandleFunc("GET /disk", DiskHandler)
	mux.HandleFunc("GET /load", LoadHandler)

	// Autres cas : fichiers statiques
	//fs := http.FileServer(http.Dir("www"))
	fs := http.FileServer(http.FS(staticFS))
	mux.Handle("/", fs)
	//mux.Handle("/lo", http.StripPrefix("/", http.FileServer(http.FS(staticFS))))

	return mux
}
