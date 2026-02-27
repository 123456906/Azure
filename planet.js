// 设置当前模块的名称
exports.modName = "Azure";

// 获取当前模块的引用，通过模块名称从游戏模组列表中查找
exports.mod = Vars.mods.locateMod(exports.modName);

/**
 * 将指定的内容添加到科技树中
 * @param {Object} content - 要添加到科技树的内容（如物品、方块、单位等）
 * @param {Object} research - 研究配置对象，包含父节点、自定义需求和目标
 * @throws {Error} 当content为null或research.parent为空时抛出错误
 * @throws {Error} 当找不到指定的父节点时抛出错误
 */
exports.addToResearch = (content, research) => {
	// 检查内容对象是否有效
	if (!content) {
		throw new Error('content is null!');
	}
	// 检查研究配置中是否指定了父节点
	if (!research.parent) {
		throw new Error('research.parent is empty!');
	}
	
	// 解析研究配置
	var researchName = research.parent;        // 父节点名称
	var customRequirements = research.requirements;  // 自定义研究需求（可选）
	var objectives = research.objectives;      // 研究目标（可选）

	// 查找该内容是否已存在于科技树中
	var lastNode = TechTree.all.find(boolf(t => t.content == content));
	if (lastNode != null) {
		// 如果已存在，则移除旧节点
		lastNode.remove();
	}

	// 创建新的科技树节点
	// 使用自定义需求（如果提供）否则使用内容的默认研究需求
	var node = new TechTree.TechNode(null, content, customRequirements !== undefined ? customRequirements : content.researchRequirements());
	
	// 获取当前模块引用
	var currentMod = exports.mod;
	
	// 如果指定了研究目标，添加到节点中
	if (objectives) {
		node.objectives.addAll(objectives);
	}

	// 如果节点已有父节点，先解除原有的父子关系
	if (node.parent != null) {
		node.parent.children.remove(node);
	}

	// 查找父节点
	// 搜索条件：节点名称匹配指定的researchName，或匹配"模块名-researchName"的格式
	var parent = TechTree.all.find(boolf(t => t.content.name.equals(researchName) || t.content.name.equals(currentMod.name + "-" + researchName)));

	// 如果找不到父节点，抛出错误
	if (parent == null) {
		throw new Error("Content '" + researchName + "' isn't in the tech tree, but '" + content.name + "' requires it to be researched.");
	}

	// 将新节点添加到父节点的子节点列表中（如果尚未添加）
	if (!parent.children.contains(node)) {
		parent.children.add(node);
	}
	
	// 设置新节点的父节点
	node.parent = parent;
};
/*全是抄饱和火力的*/