FROM golang:1.25 AS builder

COPY src /go/src
COPY Makefile /go

RUN make build

FROM busybox
COPY --from=builder /go/bin/web-ui /web-ui

EXPOSE 8888

ENTRYPOINT ["/web-ui"]