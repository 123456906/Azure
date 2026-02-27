function newItem(name) {
	exports[name] = (() => {
		let AZitems = extend(Item, name, {});
		return AZitems;
	})();
}
newItem("msilicon")