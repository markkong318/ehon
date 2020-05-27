cc.Class({
    extends: cc.Component,

    properties: {
        nodes: [cc.Node],
        nextScene: ""
    },

    start: function () {
        this.idx = -1;

        this.node.on('touchstart', () => {
            this.touch();
        }, this);

        if (this.nextScene) {
            cc.director.preloadScene(this.nextScene);
        }
    },


    touch: function () {
        console.log("==>");
        let node;
        let component;

        if (this.isPlaying(this.idx)) {
            return;
        }

        this.idx++;

        if (this.idx >= this.nodes.length) {
            this.next();
            return;
        }

        this.play(this.idx);
    },

    play: function(idx) {
        let component;

        const node = this.nodes[idx];

        if (!node) {
            return false;
        }

        component = node.getComponent("message") || node.getComponent("animal");
        if (!component) {
            return;
        }

        component.play();
    },

    isPlaying: function(idx) {
        let component;

        const node = this.nodes[idx];

        if (!node) {
            return false;
        }

        component = node.getComponent("message") || node.getComponent("animal");
        if (component) {
            return component.isPlaying();
        }

        return false;
    },

    next: function() {
        if (this.nextScene) {
            cc.director.loadScene(this.nextScene);
        }
    }
});