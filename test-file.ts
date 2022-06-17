/**
 * Here's the JSDoc!! This is a very complex example of what a doc comment might
 * look like.
 * 
 * This would be an extended description included in the primary body of the doc
 * comment, but not part of the leading summary.
 * 
 * @param {string} func
 * @param {number} operand
 * @returns {float}
 */
export function myFunction(func: string, operand: number): number {
	
	return 0.00;
	
}

export class MyClass<T extends number> {
	
	public getObj(): T {
		
		return undefined as any;
		
	}
	
	public getOtherObj(): number {
		
		return 1;
		
	}
	
}
