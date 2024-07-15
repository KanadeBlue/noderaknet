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

class NewIncomingConnection extends Packet {
	packetID = Identifiers.NEW_INCOMING_CONNECTION;
	serverAddress;
	systemAddresses;
	requestTimestamp;
	replyTimestamp;

	decodeBody() {
		this.serverAddress = this.readAddress();
		this.systemAddresses = [];
		for (let i = 0; i < 20; ++i) {
			this.systemAddresses.push(this.readAddress());
		}
		this.requestTimestamp = this.readUnsignedLongBE();
		this.replyTimestamp = this.readUnsignedLongBE();
	}

	encodeBody() {
		this.writeAddress(this.serverAddress);
		for (let i = 0; i < this.systemAddresses.length; ++i) {
			this.writeAddress(this.systemAddresses[i]);
		}
		this.writeUnsignedLongBE(this.requestTimestamp);
		this.writeUnsignedLongBE(this.replyTimestamp);
	}
}

module.exports = NewIncomingConnection;
