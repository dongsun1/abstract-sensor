class Sensor {
    constructor() {
        this.powerStatus = 'off';
        this.reportingInterval = 10000;
    }

    turn(method) {
        if (method === 'off') {
            this.status = 'idle';
            this.powerStatus = method;
            return;
        }
        if (this.powerStatus === 'on') {
            throw new Error();
        }
        this.status = 'idle';
        this.powerStatus = method;

        setTimeout(() => {
            this.status = 'sensingDistance';
        }, this.reportingInterval);

        setTimeout(() => {
            this.status = 'reportingData';
        }, this.reportingInterval + 500);

        setTimeout(() => {
            this.status = 'idle';
        }, this.reportingInterval + 500 + 1000);
    }
}

class IotServer {
    start(sensor) {}

    publish(props) {
        reportingInterval = props.payload;
    }
}

module.exports = {
    Sensor,
    IotServer,
};
