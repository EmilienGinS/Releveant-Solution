FROM golang:1.25 AS builder

COPY src /go/src
COPY Makefile /go

RUN make build

FROM busybox
COPY --from=builder /go/bin/periserv /periserv

EXPOSE 8888

ENTRYPOINT ["/periserv"]