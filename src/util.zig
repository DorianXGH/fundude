const std = @import("std");

pub fn Matrix(comptime T: type, width: usize, height: usize) type {
    return packed struct {
        const Self = @This();

        data: [height * width]T,
        comptime width: usize = width,
        comptime height: usize = height,

        pub fn toArraySlice(self: *Self) []T {
            return &self.data;
        }

        pub fn toSlice(self: *Self) MatrixSlice(T) {
            return MatrixSlice(T){
                .data = self.toArraySlice(),
                .width = width,
                .height = height,
            };
        }

        pub fn reset(self: *Self, val: T) void {
            std.mem.set(T, &self.data, val);
        }

        pub fn get(self: Self, x: usize, y: usize) T {
            const i = self.idx(x, y);
            return self.data[i];
        }

        pub fn set(self: *Self, x: usize, y: usize, val: T) void {
            const i = self.idx(x, y);
            self.data[i] = val;
        }

        pub fn sliceLine(self: *Self, x: usize, y: usize) []T {
            const start = self.idx(x, y);
            const len = self.width - (x % self.width);
            return self.data[start .. start + len];
        }

        fn idx(self: Self, x: usize, y: usize) usize {
            std.debug.assert(x < width);
            std.debug.assert(y < height);
            return x + y * width;
        }
    };
}

pub fn MatrixSlice(comptime T: type) type {
    return struct {
        const Self = @This();

        data: []T,
        width: usize,
        height: usize,

        pub fn get(self: Self, x: usize, y: usize) T {
            const i = self.idx(x, y);
            return self.data[i];
        }

        pub fn set(self: Self, x: usize, y: usize, val: T) void {
            const i = self.idx(x, y);
            self.data[i] = val;
        }

        pub fn sliceLine(self: *Self, x: usize, y: usize) []T {
            const start = self.idx(x, y);
            const len = self.width - (x % self.width);
            return self.data[start .. start + len];
        }

        fn idx(self: Self, x: usize, y: usize) usize {
            std.debug.assert(x < self.width);
            std.debug.assert(y < self.height);
            return x + y * self.width;
        }
    };
}

// Adapted from https://github.com/ziglang/zig/issues/793#issuecomment-482927820
pub fn EnumArray(comptime E: type, comptime T: type) type {
    return packed struct {
        data: [@memberCount(E)]T,

        fn get(self: @This(), tag: E) T {
            return self.data[@enumToInt(tag)];
        }

        fn set(self: *@This(), tag: E, value: T) void {
            self.data[@enumToInt(tag)] = value;
        }

        fn copy(self: *@This(), dst: E, src: E) void {
            self.set(dst, self.get(src));
        }
    };
}