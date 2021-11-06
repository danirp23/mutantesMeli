class Service {
    constructor() {
    }

    async initialize() {
    }

    /**
     * Retrives Mutans
     * @param {*} event
     * @param {*} context
     */
    async getMutans(event, context) {

        try {
            let arrayTest = event.body.dna.map(sequence => sequence.split(""));
            arrayTest.map(sequence => {
                this.adnHorizontal(sequence)
            });
            let array90 = arrayTest[0].map((val, index) => arrayTest.map(row => row[index]).reverse())
            array90.map(sequence => {
                this.adnHorizontal(sequence)
            })
        } catch (error) {
            console.error("Error:", error);
            return 404;
        }
    }

    adnHorizontal(sequence) {
        for (let i = 0; i < sequence.length - 3; i++) {
            if (sequence[i] === sequence[i + 1] && sequence[i + 1] === sequence[i + 2]
                && sequence[i + 2] === sequence[i + 3]) {
            }
        }
    }
}

exports.Service = Service;
