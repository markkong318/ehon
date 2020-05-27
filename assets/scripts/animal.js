cc.Class({
    extends: cc.Component,

    properties: {
    },

    start: function () {
        this.node.opacity = 0;

        this.playing = false;
    },

    play: function () {
        this.playing = true;

        cc.tween(this.node)
            .to(1, {opacity: 255})
            .call(() => {
                this.playing = false;
            })
            .start()
    },

    isPlaying: function() {
        return this.playing;
    }
});