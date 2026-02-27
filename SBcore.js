package biotech.maps.planets;

import arc.graphics.*;
import arc.math.*;
import arc.math.geom.*;
import arc.util.*;
import arc.util.noise.*;
import biotech.content.BioBlocks; // 导入自定义生物科技方块
import mindustry.ai.*;
import mindustry.content.*;
import mindustry.game.*;
import mindustry.maps.generators.*;
import mindustry.maps.planet.ErekirPlanetGenerator; // 继承Erekir行星生成器
import mindustry.type.*;
import mindustry.world.*;
import mindustry.world.blocks.environment.*;
import mindustry.world.meta.*;

import static mindustry.Vars.*;

// Andori行星生成器类，继承自Erekir行星生成器
public class AndoriPlanetGenerator extends ErekirPlanetGenerator {

    // 地形方块数组 - 定义行星地表的主要方块类型
    Block[] terrain = {
        FloorBlocks.vegetationstone,         // 红色石头
        FloorBlocks.vegetation,      // 黄色石头
        FloorBlocks.stone,    // 致密红色石头
        FloorBlocks.snowstone // 黄色石板
        FloorBlocks.snowsea
        FloorBlocks.snow
        FloorBlocks.sea
    };
    
    // 初始化块 - 在对象构造时执行
    {
        baseSeed = 7; // 基础种子值，用于地形生成的随机性
        // 默认初始蓝图（Base64编码的蓝图数据）
        defaultLoadout = Schematics.readBase64("bXNjaAF4nGNgYmBiYWDJS8xNZWB7tmDH0/3NDOzFJamJuZkpDFzFyRmpuYklmcnFDNwpqcXJRZkFJZn5eQwMDGw5iUmpOcUMTNGxjAzyT3fNfzpn/vPlE591Neg+2dHwcsY2oNCzaTOhJjIwMDJAAADBmCrd");
    }
}