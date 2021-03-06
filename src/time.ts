// Time
import {SYS, utimbuf, Iutimbuf, timevalarr, Itimevalarr} from './platform';
import {libsys} from './libsys';
import {TCallback} from './types';


// ## utime, utimes, utimensat and futimens
//
// In `libc`:
//
//     int utime(const char *filename, const struct utimbuf *times);
//     int utimes(const char *filename, const struct timeval times[2]);
//     int utimensat(int dirfd, const char *pathname, const struct timespec times[2], int flags);
//     int futimens(int fd, const struct timespec times[2]);
//
export function utime(filename: string, times: Iutimbuf): number {
    const buf = utimbuf.pack(times);
    return libsys.syscall(SYS.utime, filename, buf);
}
export function utimeAsync(filename: string, times: Iutimbuf, callback: TCallback) {
    const buf = utimbuf.pack(times);
    libsys.asyscall(SYS.utime, filename, buf, callback);
}
export function utimes(filename: string, times: Itimevalarr): number {
    const buf = timevalarr.pack(times);
    return libsys.syscall(SYS.utimes, buf);
}
export function utimesAsync(filename: string, times: Itimevalarr, callback: TCallback) {
    const buf = timevalarr.pack(times);
    libsys.asyscall(SYS.utimes, buf, callback);
}

// TODO: implement these
// export function utimensat(dirfd: number, pathname: string, timespecarr, flags: number): number {
//
// }
//
// export function futimens(fd: number, times: defs.timespecarr): number {
//
// }
