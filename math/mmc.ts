import MDC from "./mdc.ts"

class MMC {
    public static calculate(a: number, b: number): number
    {
        if(a === 0 || b === 0) return 0;
        const product = a * b;
        const divisor = MDC.calculate(a,b);
        const result = product / divisor;

        return result;
    }

    public static calculateMultiple(nums: number[]): number
    {
        return nums.reduce((a,b) => this.calculate(a,b));
    }
}

export default MMC;
