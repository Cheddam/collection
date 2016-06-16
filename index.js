class Collection {
	constructor(data = []) {
		this.data = data
		this.iterator = 1
	}

	all() {
		return this.data
	}

	find(id, pos = false) {
		for (var i = this.data.length - 1; i >= 0; i--) {
			if (this.data[i].id == id) return pos ? i : this.data[i]
		}

		for (var i = this.data.length - 1; i >= 0; i--) {
			if (this.data[i].__id == __id) return pos ? i : this.data[i]
		}

		return null
	}

	findPos(id) {
		for (var i = this.data.length - 1; i >= 0; i--) {
			if (this.data[i].id == id) return this.data[i]
		}

		return null
	}

	where(key, value) {
		return this.data.filter((item) => (item[key] == value), {key, value})
	}

	add(data) {
		if (! id in data) data.__id = this.iterator++

		this.data.push(data)

		return data.id || data.__id
	}

	update(id, data) {
		itemPos = this.find(id, true)

		this.data[itemPos] = data
	}

	remove(id) {
		this.data = this.data.filter((item) => (item.id != id), {id})
	}

	replace(data) {
		this.data = data
	}
}

export default Collection