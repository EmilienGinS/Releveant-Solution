package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
)

func HandleHTTP() {
	http.ListenAndServe(":8888", Router())
}

//go:embed all:static/*
var staticFiles embed.FS


func Router() http.Handler {


	staticFS, err := fs.Sub(staticFiles, "static")
    if err != nil {
        log.Fatal("fs.Sub erreur:", err)
    }
	
	mux := http.NewServeMux()
	mux.Handle("/", http.StripPrefix("/", http.FileServer(http.FS(staticFS))))
	return mux
}