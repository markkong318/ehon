cc.Class({
    extends: cc.Component,

    properties: {
    },

    start: function () {
        const label = this.getComponent(cc.Label);

        this.text = label.string;
        label.string = "";

        this.playing = false;
    },

    play: function () {
        const node = cc.find("triangle");
        node.active = false;

        const label = this.getComponent(cc.Label);

        let text = this.text;
        let tmp = '';

        this.playing = true;

        this.schedule(() => {
            if (text.length) {
                tmp = `${tmp}${text[0]}`;
                text = text.substr(1);

                label.string = tmp;

            } else {
                const offsetY = -10;

                node.active = true;
                node.setPosition(this.node.x + this.node.width, this.node.y + offsetY);

                this.playing = false;
            }
        }, 0.05, text.length);
    },

    isPlaying: function() {
        return this.playing;
    }
});