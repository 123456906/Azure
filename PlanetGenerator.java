// 导入自定义物品模块，包含裂位能等模组物品
const myitems = require("AZitems");

// 炮塔射程半径（格数），用于显示攻击范围
let range = 280; //俩圆半径，炮塔射程

// 定义炮塔
const turretZ = extend(ItemTurret, "bodyguard", {});

// 定义区块
const core = extend(CoreBlock, "Fcore", {
	// 重绘放置预览：显示炮塔射程范围
	drawPlace(x, y, rotation, valid) {
		this.super$drawPlace(x, y, rotation, valid);          // 调用父类绘制基础预览
		Drawf.dashCircle(x * 8 + this.offset, y * 8 + this.offset, range, Pal.accent); // 绘制射程指示圈
	}
});

// 核心建筑的自定义逻辑构建器
core.buildType = prov(() => {
	// 创建炮塔负载实体，初始为无主阵营（中立单位）
	const p = new BuildPayload(turretZ, Team.derelict); //这里写炮塔
	
	// 返回自定义的核心建筑实体
	return extend(CoreBlock.CoreBuild, core, {
		// 每帧更新逻辑：炮塔归属权同步、弹药补给
		updateTile() {
			this.super$updateTile();                     // 父类更新逻辑
			
			// 将炮塔阵营与核心阵营同步（防止中立或敌对）
			if (p.build.team != this.team) {
				p.build.team = this.team;
			}
			
			// 更新负载实体的状态（位置、动画等）
			p.update(null, this);
			
			// 弹药补给逻辑：检查是否可接受裂位能，且核心库存有弹药
			if (p.build.acceptItem(this, myitems.msilicon) && this.team.core().items.get(myitems.msilicon) >= 1) {
				p.build.handleItem(this, myitems.msilicon);  // 给炮塔补充1弹药
				this.team.core().items.remove(myitems.msilicon, 1); // 从核心移除1消耗
			}
			
			// 将炮塔模型放置到核心当前位置，保持负载旋转状态
			p.set(this.x, this.y, p.build.payloadRotation);
		},
		
		// 渲染绘制：同时绘制核心本体和炮塔实体
		draw() {
			this.super$draw();                            // 绘制核心本体
			p.draw();                                    // 绘制搭载的炮塔
		},
		
		// 点击选中时绘制射程指示圆环
		drawSelect() {
			this.super$drawSelect();                     // 父类选中绘制
			Drawf.dashCircle(this.x, this.y, range, Pal.accent); // 炮塔射程指示
		},
	})
});

exports.Fcore = Fcore;