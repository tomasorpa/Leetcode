function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);
    const map = new Map();
    
    // Al recorrer de atrás hacia adelante o verificar si ya existe,
    // manejamos los duplicados correctamente.
    sorted.forEach((num, index) => {
        if (!map.has(num)) {
            map.set(num, index);
        }
    });
    
    return nums.map(num => map.get(num));
}