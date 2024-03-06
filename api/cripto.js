import { scryptSync, randomBytes} from "crypto"


export default function salhash(senha) {

    const sal = randomBytes(16).toString("hex");

    const hash = scryptSync(senha , sal , 64).toString("hex");

    return hash
}

