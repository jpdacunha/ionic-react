import { calculateBiorhytms } from "./biorhytms";

it('Calculates the physical biorhytms', () => {
    const biorythms = calculateBiorhytms('1999-12-31', '2022-12-31');
    expect(biorythms.physical).toBe(0.9977);
});

it('Calculates the physical biorhytms', () => {
    const biorythms = calculateBiorhytms('1999-12-31', '2022-12-31');
    expect(biorythms.emotional).toBe(0.2225);
});

it('Calculates the physical biorhytms', () => {
    const biorythms = calculateBiorhytms('1999-12-31', '2022-12-31');
    expect(biorythms.intellectual).toBe(-0.4582);
});