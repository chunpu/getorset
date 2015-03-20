module.exports = function(owner, name, ret) {
	ret = ret || {}
	if (owner) {
		if (owner[name]) {
			return owner[name]
		}
		owner[name] = ret
	}
	return ret
}
