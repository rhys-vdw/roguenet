//TODO: Construct these definitions from server data
module.exports = {
	FLOOR: {
		tile: new ut.Tile('.', 203, 203, 203),
		solid: false,
		opaque: false
	},
	CONVERSATION_AREA: {
		tile: new ut.Tile('=', 255, 255, 85),
		solid: false,
		opaque: false
	},
	WALL: {
		tile: new ut.Tile('#', 203, 203, 203),
		solid: true,
		opaque: true
	},
	GRASS: {
		tile: new ut.Tile(',', 0, 128, 0),
		solid: false,
		opaque: false
	},
	STAIRS_DOWN: {
		tile: new ut.Tile('>', 255, 255, 255),
		solid: false,
		opaque: false
	},
	STAIRS_UP: {
		tile: new ut.Tile('<', 255, 255, 255),
		solid: false,
		opaque: false
	},
	BUSH: {
		tile: new ut.Tile('*', 0, 128, 0),
		solid: true,
		opaque: true
	},
	WATER: {
		tile: new ut.Tile('=', 0, 0, 255),
		solid: true,
		opaque: false
	},
	CARPET: {
		tile: new ut.Tile('=', 178, 0, 0),
		solid: false,
		opaque: false
	},
	SIGN: {
		tile: new ut.Tile('@', 51, 153, 255),
		solid: true,
		opaque: false
	},
	SIGN_LEFT_WING: {
		tile: new ut.Tile('╙', 51, 153, 255),
		solid: true,
		opaque: false
	},
	SIGN_RIGHT_WING: {
		tile: new ut.Tile('╜', 51, 153, 255),
		solid: true,
		opaque: false
	},
	ALTAR_LEFT: {
		tile: new ut.Tile('╔', 128, 0, 255),
		solid: true,
		opaque: false
	},
	ALTAR_MIDDLE: {
		tile: new ut.Tile('═', 128, 0, 255),
		solid: true,
		opaque: false
	},
	ALTAR_RIGHT: {
		tile: new ut.Tile('╗', 128, 0, 255),
		solid: true,
		opaque: false
	},
	WOOD_BARRIER: {
		tile: new ut.Tile('╥', 102, 51, 0),
		solid: true,
		opaque: false
	},
	DIRT: {
		tile: new ut.Tile(',', 77, 61, 38),
		solid: false,
		opaque: false
	},
	WINDOW: {
		tile: new ut.Tile('+', 251, 0, 255),
		solid: true,
		opaque: false
	}
}