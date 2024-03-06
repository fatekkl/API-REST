import { scryptSync , randomBytes} from "crypto"

function generateSal() {
    return randomBytes(16).toString("hex");
}

export default function salhash(senha) {

    const sal = generateSal()

    const hash = scryptSync(senha, sal, 64).toString("hex");

    return {hash};
}

