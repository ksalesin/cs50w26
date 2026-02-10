# Activity - One Ping Only
## Build A UDP Echo Service 

## Overview

In this activity, you'll implement a UDP client-server application. The server
receives messages, adds a timestamp, and echoes them back. The client sends a
message and measures the round-trip time (RTT).

```
   CLIENT                                      SERVER         
                                                 
1. Create                                   1. Create         
   socket                                      socket         
                                                 
                                            2. Bind to        
                                               port 8888      
                                                 
2. Send msg  ───── "Hello!" ──────────────> 3. Receive        
                      (UDP packet)               
                                            4. Add       
                                               timestamp      
                                                 
3. Receive   <──── "[10:30:45] Hello!" ──── 5. Send back      
                      (UDP packet)               
4. Print RTT


```

## Remember: UDP is Connectionless

Unlike TCP, there's no "connection" - each packet is independent, so
- Packets might arrive out of order
- Packets might be lost (no automatic retry)
- Packets might be duplicated
- But it's FAST and has low overhead

## Files

Located in `udp_io` in our examples directory.

* common.h
* Makefile
* README\.md
* sanity_check.c
* socket_utils.c **Implement TODO 1-7**
* socket_utils.h
* udp_client.c **Implement any TODOs**
* udp_server.c **Implement any TODOs**

## Getting Started

### Step 1: Implement TODO 1 in socket_utils.c

Open `socket_utils.c` and implement `create_udp_socket()`.

### Step 2: Test it

```bash
make sanity_check
./sanity_check
```

You should see: `SUCCESS: Created UDP socket (fd=3)`

### Step 3: Implement remaining TODOs

Work through TODOs 2-6 in `socket_utils.c`. Each one has detailed comments.

### Step 4: Complete server and client

Fill in the TODO sections in `udp_server.c` and `udp_client.c`.

### Step 5: Build and test

```bash
make GROUP=2  # Build server and client for group 2
./server      # In terminal 1
./client 127.0.0.1 "Hello!"   # In terminal 2
```

Or use the automated test:
```bash
make GROUP=2 test
```

## Quick Reference

### Byte Order Conversion
```c
htons(port)  // Host to Network Short (for ports)
ntohs(port)  // Network to Host Short
htonl(addr)  // Host to Network Long (for addresses)
ntohl(addr)  // Network to Host Long
```

### Address Setup
```c
struct sockaddr_in addr;
memset(&addr, 0, sizeof(addr));      // Zero it out!
addr.sin_family = AF_INET;           // IPv4
addr.sin_port = htons(1234);         // Port number in network byte order
addr.sin_addr.s_addr = INADDR_ANY;   // Any interface (server)
// OR
inet_pton(AF_INET, "127.0.0.1", &addr.sin_addr);  // Specific IP (client)
```

### Socket Calls
```c
// Create
int sockfd = socket(AF_INET, SOCK_DGRAM, 0);

// Bind (server only)
bind(sockfd, (struct sockaddr*)&addr, sizeof(addr));

// Send
sendto(sockfd, buffer, length, 0, (struct sockaddr*)&dest, sizeof(dest));

// Receive
recvfrom(sockfd, buffer, size, 0, (struct sockaddr*)&sender, &addr_len);
```

## Common Mistakes

1. **Forgetting `htons()`** - Port numbers MUST be converted
2. **Not zeroing the address struct** - Always `memset(&addr, 0, ...)`
3. **Missing cast** - Use `(struct sockaddr*)&addr` in bind/sendto/recvfrom
4. **Wrong addr_len** - Set it BEFORE calling recvfrom, not after
5. **Not null-terminating** - After recv: `buffer[bytes_received] = '\0'`

## BONUS

Implement TODO 7 (`receive_with_timeout`) so the client doesn't hang forever
if the server isn't running.
