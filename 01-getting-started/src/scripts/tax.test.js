import offShore from './tax.js'

test("tier1 tax test", () => {
    expect(offShore.taxCalc(48535)).toBe("7280.25");
    expect(offShore.taxCalc(48000)).toBe("7200.00");
    expect(offShore.taxCalc(50000)).toBe("7580.57");
    expect(offShore.taxCalc(97069)).toBe("17229.72");
    expect(offShore.taxCalc(150000)).toBe("30991.78");
    expect(offShore.taxCalc(200000)).toBe("45477.59");
    expect(offShore.taxCalc(250000)).toBe("61402.87");
});

