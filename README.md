# Introduction
gRPC is a robust open-source RPC (Remote Procedure Call) framework used to build scalable and fast APIs. It allows the client and server applications to communicate transparently and develop connected systems.

This framework relies on HTTP/2, protocol buffers, and other modern technology stacks to ensure maximum API secure, performance, and scalability.

gRPC is roughly 7 times faster than REST when receiving data & roughly 10 times faster than REST when sending data for this specific payload. This is mainly due to the tight packing of the Protocol Buffers and the use of HTTP/2 by gRPC.

### Messaging Format: 
    Protobuf (Protocol Buffers)

### Communication: (gRPC service supports different streaming combinations through HTTP/2)
    - Unary (no streaming)
    - Client-to-server streaming
    - Server-to-client streaming
    - Bi-directional streaming

### Code Generation: 
    Native Protoc Compiler

# When to Use gRPC APIs
As for gRPC, most third-party tools continue to lack in-built features for gRPC compatibility. As such, gRPC is mostly relegated to building internal systems, i.e., infrastructures that are closed to external users. With that caveat in mind, gRPC APIs could be useful for the following circumstances: 

- Microservices connections: gRPC’s low-latency and high-speed throughput communication make it particularly useful for connecting architectures that consist of lightweight microservices where the efficiency of message transmission is paramount.

- Multi-language systems: With its native code generation support for a wide range of development languages, gRPC is excellent when managing connections within a polyglot environment. 

- Real-time streaming: When real-time communication is a requirement, gRPC’s ability to manage bidirectional streaming allows your system to send and receive messages in real-time without waiting for Unary client-response communication. 

- Low-power low-bandwidth networks: gRPC’s use of serialized Protobuf messages offers light-weight messaging, greater efficiency, and speed for bandwidth-constrained, low-power networks (especially when compared to JSON). IoT would be an example of this kind of network that could benefit from gRPC APIs.

## Start gRPC NodeJs Service/Server
```
node server.js
```
## Start gRPC NodeJs Client
```
node client.js
```

