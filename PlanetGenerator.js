// 植被石头地板
const vegetationstone = extend(Floor, "vegetationstone", {
    variants: 0
});

// 植被地板
const vegetation = extend(Floor, "vegetation", {
    variants: 0
});

// 石头地板
const stone = extend(Floor, "stone", {
    variants: 0
});

// 雪石地板
const snowstone = extend(Floor, "snowstone", {
    variants: 0
});

// 雪海地板
const snowsea = extend(Floor, "snowsea", {
    variants: 0
});

// 雪地板
const snow = extend(Floor, "snow", {
    variants: 0
});

// 海地板（参考deep-water）
const sea = extend(Floor, "sea", {
    speedMultiplier: 0.2,
    variants: 0,
    liquidDrop: Liquids.water,
    liquidMultiplier: 1.5,
    isLiquid: true,
    status: StatusEffects.wet,
    statusDuration: 120,
    drownTime: 200,
    cacheLayer: CacheLayer.water,
    albedo: 0.9,
    supportsOverlay: true
});

// 导出所有地板
exports.vegetationstone = vegetationstone;
exports.vegetation = vegetation;
exports.stone = stone;
exports.snowstone = snowstone;
exports.snowsea = snowsea;
exports.snow = snow;
exports.sea = sea;