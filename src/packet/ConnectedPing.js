/******************************************\
 *  ____  _            ____  _         _  *
 * | __ )| |_   _  ___| __ )(_)_ __ __| | *
 * |  _ \| | | | |/ _ \  _ \| | '__/ _` | *
 * | |_) | | |_| |  __/ |_) | | | | (_| | *
 * |____/|_|\__,_|\___|____/|_|_|  \__,_| *
 *                                        *
 * This file is licensed under the GNU    *
 * General Public License 3. To use or    *
 * modify it you must accept the terms    *
 * of the license.                        *
 * ___________________________            *
 * \ @author BlueBirdMC Team /            *
\******************************************/

const Packet = require("./Packet");
const Identifiers = require("../Identifiers");

class ConnectedPing extends Packet {
	packetID = Identifiers.CONNECTED_PING;

	clientTimestamp;

	decodeBody() {
		this.clientTimestamp = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeUnsignedLongBE(this.clientTimestamp);
	}
}

module.exports = ConnectedPing;
