run: 
	@cd src; go mod tidy; go run *.go

build:
	@cd src; go mod tidy; go build -o ../bin/web-ui *.go

clean:
	@rm bin/web-ui