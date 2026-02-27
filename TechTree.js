const FloorBlocks = require("FloorBlocks");; // 导入自定义方块
const core = require("Acore");
// Andori行星生成器类，继承自Erekir行星生成器
planet.generator = extend(ErekirPlanetGenerator, {

    // 地形方块数组 - 定义行星地表的主要方块类型
    terrain: [
        FloorBlocks.vegetationstone,         // 红色石头
        FloorBlocks.vegetation,      // 黄色石头
        FloorBlocks.stone,    // 致密红色石头
        FloorBlocks.snowstone, // 黄色石板
        FloorBlocks.snowsea,
        FloorBlocks.snow,
        FloorBlocks.sea,
    ],
    
    baseSeed: 7,
    
    // 获取默认核心蓝图
    getDefaultLoadout() {
        return Schematics.readBase64("bXNjaAF4nGNgYmBiYWDJS8xNZWB7tmDH0/3NDOzFJamJuZkpDFzFyRmpuYklmcnFDNwpqcXJRZkFJZn5eQwMDGw5iUmpOcUMTNGxjAzyT3fNfzpn/vPlE591Neg+2dHwcsY2oNCzaTOhJjIwMDJAAADBmCrd");
    },
    
    // 是否允许着陆[整颗行星都可以着陆]
    allowLanding(sector) {
        return false;
    }
}

exports.PlanetGenerator = PlanetGenerator;