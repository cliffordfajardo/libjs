# libjs

[![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

[libc](https://en.wikipedia.org/wiki/C_standard_library) in JavaScript &mdash; **libjs**.


## Usage

```shell
npm install libjs libsys
```

This library uses [`libsys`](https://github.com/streamich/libsys) to execute system calls from JavaScript.
It expects your environment has `libsys` global object, in Node.js you can shim `libsys` as follows:

```js
require('libsys/shim');
```


## Examples

- [Write to console](./docs/examples/write-to-console.md)
- [Read from a file](./docs/examples/read-file.md)
- [Run `stat()` on  a file](./docs/examples/stat.md)
- [Create a basic server](./docs/examples/server.md)


## Reference

- [Synchronous system calls](./docs/synchronous-system-calls.md)
   - __Files__
      - [`read`](./docs/syscalls/read.md) &mdash; read from a file descriptor.
      - [`write`](./docs/syscalls/write.md) &mdash; write to a file descriptor.
      - [`open`](./docs/syscalls/open.md)  &mdash; open a file.
      - [`close`](./docs/syscalls/close.md) &mdash; close a file descriptor.
      - [`access`](./docs/syscalls/ADD.md) &mdash; check user can access a file.
      - [`chmod`](./docs/syscalls/ADD.md) &mdash; change file attributes.
      - [`fchmod`](./docs/syscalls/ADD.md) &mdash; change file attributes.
      - [`chown`](./docs/syscalls/ADD.md) &mdash; change file owner.
      - [`fchown`](./docs/syscalls/ADD.md) &mdash; change file owner.
      - [`lchown`](./docs/syscalls/ADD.md) &mdash; change file owner.
      - [`truncate`](./docs/syscalls/ADD.md) &mdash; erase file contents.
      - [`ftruncate`](./docs/syscalls/ADD.md) &mdash; erase file contents.
      - [`lseek`](./docs/syscalls/ADD.md) &mdash; change cursor position.
      - [`rename`](./docs/syscalls/ADD.md) &mdash; rename a file.
      - [`fsync`](./docs/syscalls/ADD.md) &mdash; flush file to disk.
      - [`fdatasync`](./docs/syscalls/ADD.md) &mdash; flush file to disk.
        <br/>
   - __Stats__:
      - [`stat`](./docs/syscalls/ADD.md) &mdash; fetch statistics about a file.
      - [`lstat`](./docs/syscalls/ADD.md) &mdash; fetch statistics about a file.
      - [`fstat`](./docs/syscalls/ADD.md) &mdash; fetch statistics about a file.
        &nbsp;
        &nbsp;
   - __Directories__:
     [`mkdir`](./docs/syscalls/ADD.md),
     [`mkdirat`](./docs/syscalls/ADD.md),
     [`rmdir`](./docs/syscalls/ADD.md),
     [`getcwd`](./docs/syscalls/ADD.md),
     [`getdents64`](./docs/syscalls/ADD.md),
     [`readdir`](./docs/syscalls/ADD.md),
     and [`readdirList`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Links__:
     [`symlink`](./docs/syscalls/ADD.md),
     [`unlink`](./docs/syscalls/ADD.md),
     [`readlink`](./docs/syscalls/ADD.md),
     and [`link`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Time__: [`utime`](./docs/syscalls/ADD.md) and [`utimes`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Networking__:
     [`socket`](./docs/syscalls/ADD.md),
     [`connect`](./docs/syscalls/ADD.md),
     [`bind`](./docs/syscalls/ADD.md),
     [`listen`](./docs/syscalls/ADD.md),
     [`accept`](./docs/syscalls/ADD.md),
     [`accept4`](./docs/syscalls/ADD.md),
     [`shutdown`](./docs/syscalls/ADD.md),
     [`send`](./docs/syscalls/ADD.md),
     [`sendto`](./docs/syscalls/ADD.md),
     [`recv`](./docs/syscalls/ADD.md),
     [`recvfrom`](./docs/syscalls/ADD.md),
     [`setsockopt`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Process__:
     [`getpid`](./docs/syscalls/ADD.md),
     [`getppid`](./docs/syscalls/ADD.md),
     [`getuid`](./docs/syscalls/ADD.md),
     [`geteuid`](./docs/syscalls/ADD.md),
     [`getgid`](./docs/syscalls/ADD.md),
     [`getegid`](./docs/syscalls/ADD.md),
     [`sched_yield`](./docs/syscalls/ADD.md),
     [`nanosleep`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Events__:
     [`fcntl`](./docs/syscalls/ADD.md),
     [`epoll_create`](./docs/syscalls/ADD.md),
     [`epoll_create1`](./docs/syscalls/ADD.md),
     [`epoll_wait`](./docs/syscalls/ADD.md),
     [`epoll_ctl`](./docs/syscalls/ADD.md),
     [`inotify_init`](./docs/syscalls/ADD.md),
     [`inotify_init1`](./docs/syscalls/ADD.md),
     [`inotify_add_watch`](./docs/syscalls/ADD.md),
     [`inotify_rm_watch`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Memory__:
     [`mmap`](./docs/syscalls/ADD.md),
     [`munmap`](./docs/syscalls/ADD.md),
     [`mprotect`](./docs/syscalls/ADD.md),
     [`shmget`](./docs/syscalls/ADD.md),
     [`shmat`](./docs/syscalls/ADD.md),
     [`shmdt`](./docs/syscalls/ADD.md),
     and [`shmctl`](./docs/syscalls/ADD.md)
     &nbsp;
- Asynchronous system calls
   - __Files__: [`readAsync`](./docs/syscalls/readAsync.md),
     [`writeAsync`](./docs/syscalls/writeAsync.md),
     [`openAsync`](./docs/syscalls/openAsync.md),
     [`closeAsync`](./docs/syscalls/closeAsync.md),
     [`accessAsync`](./docs/syscalls/ADD.md),
     [`chmodAsync`](./docs/syscalls/ADD.md),
     [`fchmodAsync`](./docs/syscalls/ADD.md),
     [`chownAsync`](./docs/syscalls/ADD.md),
     [`fchownAsync`](./docs/syscalls/ADD.md),
     [`lchownAsync`](./docs/syscalls/ADD.md),
     [`truncateAsync`](./docs/syscalls/ADD.md),
     [`ftruncateAsync`](./docs/syscalls/ADD.md),
     [`lseekAsync`](./docs/syscalls/ADD.md),
     [`renameAsync`](./docs/syscalls/ADD.md),
     [`fsyncAsync`](./docs/syscalls/ADD.md),
     [`fdatasyncAsync`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Stats__: [`statAsync`](./docs/syscalls/ADD.md),
     [`lstatAsync`](./docs/syscalls/ADD.md),
     and [`fstatAsync`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Directories__: [`mkdirAsync`](./docs/syscalls/ADD.md),
     [`mkdiratAsync`](./docs/syscalls/ADD.md),
     [`rmdirAsync`](./docs/syscalls/ADD.md),
     [`getcwdAsync`](./docs/syscalls/ADD.md),
     [`getdents64Async`](./docs/syscalls/ADD.md),
     and [`readdirListAsync`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Links__: [`symlinkAsync`](./docs/syscalls/ADD.md),
     [`unlinkAsync`](./docs/syscalls/ADD.md),
     [`readlinkAsync`](./docs/syscalls/ADD.md),
     and [`linkAsync`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Time__: [`utimeAsync`](./docs/syscalls/ADD.md) and [`utimesAsync`](./docs/syscalls/ADD.md)
     &nbsp;
   - __Networking__: [`socketAsync`](./docs/syscalls/ADD.md),
     [`connectAsync`](./docs/syscalls/ADD.md),
     [`bindAsync`](./docs/syscalls/ADD.md),
     [`listenAsync`](./docs/syscalls/ADD.md),
     [`acceptAsync`](./docs/syscalls/ADD.md),
     [`accept4Async`](./docs/syscalls/ADD.md),
     [`shutdownAsync`](./docs/syscalls/ADD.md),
     [`sendAsync`](./docs/syscalls/ADD.md)
     and [`sendtoAsync`](./docs/syscalls/ADD.md),
     &nbsp;
   - __Process__: [`getpidAsync`](./docs/syscalls/ADD.md),
     [`getppidAsync`](./docs/syscalls/ADD.md),
     [`getuidAsync`](./docs/syscalls/ADD.md),
     [`geteuidAsync`](./docs/syscalls/ADD.md),
     [`getgidAsync`](./docs/syscalls/ADD.md),
     and [`getegidAsync`](./docs/syscalls/ADD.md),
     &nbsp;
- Structs
   - `epoll_event` and `Iepoll_event`
   - `in_addr` and `Iin_addr`
   - `inotify_event` and `Iinotify_event`
   - `ipc_perm` and `Iipc_perm`
   - `ipv4` and `Iipv4`
   - `linux_dirent64` and `Ilinux_dirent64`
   - `shmid_ds` and `Ishmid_ds`
   - `sigaction` and `Isigaction`
   - `sockaddr` and `Isockaddr`
   - `sockaddr_in` and `Isockaddr_in`
   - `statStruct` and `IstatStruct`
   - `timespec` and `Itimespec`
   - `timeval` and `Itimeval`
   - `timevalarr` and `Itimevalarr`
   - `utimbuf` and `Iutimbuf`
   - [`keventStruct`](./src/structs/kevent.ts) and [`IkeventStruct`](./src/structs/kevent.ts)
   - [`kevent64_sStruct`](./src/structs/kevent64_s.ts) and [`Ikevent64_sStruct`](./src/structs/kevent64_s.ts)
- Sockets
   - `flip`,
     `htons32`,
     `hton16`,
     `htons`,
     `Ip`,
     `Ipv4`,
     and `Ipv6`,
- Constants
   - [`AF`](./src/consts/AF.ts),
     [`AMODE`](./src/consts/AMODE.ts),
     [`BUS`](./src/consts/BUS.ts),
     [`CLD`](./src/consts/CLD.ts),
     [`DT`](./src/consts/DT.ts),
     [`EPOLL`](./src/consts/EPOLL.ts),
     [`EPOLL_CTL`](./src/consts/EPOLL_CTL.ts),
     [`EPOLL_EVENTS`](./src/consts/EPOLL_EVENTS.ts),
     [`ERROR`](./src/consts/ERROR.ts),
     [`EV`](./src/consts/EV.ts),
     [`EVFILT`](./src/consts/EVFILT.ts),
     [`FCNTL`](./src/consts/FCNTL.ts),
     [`FD`](./src/consts/FD.ts),
     [`FLAG`](./src/consts/FLAG.ts),
     [`FPE`](./src/consts/FPE.ts),
     [`ILL`](./src/consts/ILL.ts),
     [`IN`](./src/consts/IN.ts),
     [`IP`](./src/consts/IP.ts),
     [`IPC`](./src/consts/IPC.ts),
     [`IPPROT`](./src/consts/IPPROT.ts),
     [`IPPROTO`](./src/consts/IPPROTO.ts),
     [`IPV6`](./src/consts/IPV6.ts),
     [`KEVENT`](./src/consts/KEVENT.ts),
     [`MAP`](./src/consts/MAP.ts),
     [`MCAST`](./src/consts/MCAST.ts),
     [`MSG`](./src/consts/MSG.ts),
     [`NOTE`](./src/consts/NOTE.ts),
     [`PF`](./src/consts/PF.ts),
     [`POLL`](./src/consts/POLL.ts),
     [`PROT`](./src/consts/PROT.ts),
     [`S`](./src/consts/S.ts),
     [`SA`](./src/consts/SA.ts),
     [`SEEK`](./src/consts/SEEK.ts),
     [`SEGV`](./src/consts/SEGV.ts),
     [`SHM`](./src/consts/SHM.ts),
     [`SHUT`](./src/consts/SHUT.ts),
     [`SI`](./src/consts/SI.ts),
     [`SIG`](./src/consts/SIG.ts),
     [`SIGEV`](./src/consts/SIGEV.ts),
     [`SO`](./src/consts/SO.ts),
     [`SOCK`](./src/consts/SOCK.ts),
     [`SOL`](./src/consts/SOL.ts),
     [`TRAP`](./src/consts/TRAP.ts)


## License

[Unlicense](./LICENSE) &mdash; public domain.



[npm-url]: https://www.npmjs.com/package/libjs
[npm-badge]: https://img.shields.io/npm/v/libjs.svg
[travis-url]: https://travis-ci.org/streamich/libjs
[travis-badge]: https://travis-ci.org/streamich/libjs.svg?branch=master
