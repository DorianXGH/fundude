const cpu = @import("cpu.zig");
const ppu = @import("ppu.zig");
const ggp = @import("ggp.zig");
const mmu = @import("mmu.zig");
const timer = @import("timer.zig");

pub const Cpu = cpu.Cpu;
pub const Mmu = mmu.Mmu;

pub const WIDTH = 160;
pub const HEIGHT = 144;

pub const MHz = 4194304;

pub const SysMode = extern enum {
    norm,
    halt,
    stop,
    fatal, // Not a GB mode, this code is bad and we should feel bad
};

pub const Fundude = struct {
    ppu: ppu.Ppu,
    cpu: cpu.Cpu,
    mmu: mmu.Mmu,

    interrupt_master: bool,

    inputs: ggp.Inputs,
    timer: timer.Timer,

    clock: struct {
        cpu: i32,
        ppu: i32,
    },

    breakpoint: u16,
    disassembly: [24]u8,

    mode: SysMode,
};
