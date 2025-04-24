class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.image('menuBackground', 'assets/bg-menu.png');
        this.load.audio('menuMusic', 'assets/menu-music.mp3');
        this.load.audio('selectSound', 'assets/select.wav');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        this.background = this.add.image(0, 0, 'menuBackground').setOrigin(0, 0);
        this.background.setDisplaySize(this.game.config.width, this.game.config.height);

        this.menuMusic = this.sound.add('menuMusic', { volume: 0.5, loop: true });
        this.menuMusic.play();

        this.selectSound = this.sound.add('selectSound');

        this.input.keyboard.on('keydown-SPACE', () => {
            this.selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.scene.start('PlayerSelect');
            this.menuMusic.stop();

            
        });
        
    }
}

class PlayerSelect extends Phaser.Scene {
    constructor() {
        super('PlayerSelect');
        this.selectedPlayer = 'player';
    }

    preload() {
        this.load.image('hangarBackground', 'assets/hangar.png');
        this.load.image('player1Button', 'assets/player.png');
        this.load.image('player2Button', 'assets/player2.png');
        this.load.image('player3Button', 'assets/player3.png');
        this.load.image('player4Button', 'assets/player4.png');
        this.load.image('player5Button', 'assets/player5.png');
        this.load.image('player6Button', 'assets/player6.png');
        this.load.image('player7Button', 'assets/player7.png');
        this.load.image('player8Button', 'assets/player8.png');
        this.load.image('player9Button', 'assets/player9.png');
        this.load.audio('backSound', 'assets/back.wav');
        this.load.audio('shipMusic', 'assets/ship.mp3');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        this.background = this.add.image(0, 0, 'hangarBackground').setOrigin(0, 0);
        this.background.setDisplaySize(this.game.config.width, this.game.config.height);
        const player1Button = this.add.image(100, 500, 'player1Button').setInteractive();
        const player2Button = this.add.image(300, 500, 'player2Button').setInteractive();
        const player3Button = this.add.image(500, 500, 'player3Button').setInteractive();
        const player4Button = this.add.image(700, 500, 'player4Button').setInteractive();
        const player5Button = this.add.image(900, 500, 'player5Button').setInteractive();
        const player6Button = this.add.image(1100, 500, 'player6Button').setInteractive();
        const player7Button = this.add.image(500, 350, 'player7Button').setInteractive();
        const player8Button = this.add.image(700, 350, 'player8Button').setInteractive();
        const player9Button = this.add.image(300, 350, 'player9Button').setInteractive();
        this.shipMusic = this.sound.add('shipMusic', { volume: 1.5, loop: true });
        this.shipMusic.play();
        const selectSound = this.sound.add('selectSound');
        this.backSound = this.sound.add('backSound');
        player1Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player';
            this.startGame();
            this.shipMusic.stop();
        });

        player2Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player2';
            this.startGame();
            this.shipMusic.stop();
        });

        player3Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player3';
            this.startGame();
            this.shipMusic.stop();
        });
        player4Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player4';
            this.startGame();
            this.shipMusic.stop();
        });

        player5Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player5';
            this.startGame();
            this.shipMusic.stop();
        });

        player6Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player6';
            this.startGame();
            this.shipMusic.stop();
        });

        player7Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player7';
            this.startGame();
            this.shipMusic.stop();
        });

        player8Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player8';
            this.startGame();
            this.shipMusic.stop();
        });

        player9Button.on('pointerdown', () => {
            selectSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.selectedPlayer = 'player9';
            this.startGame();
            this.shipMusic.stop();
        });

        this.input.keyboard.on('keydown-ESC', () => {
            this.backSound.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.scene.start('MainMenu');
            this.shipMusic.stop();
        });
    }

    startGame() {
        this.scene.start('LevelSelect', { selectedPlayer: this.selectedPlayer });
    }
}

class LevelSelect extends Phaser.Scene {
    constructor() {
        super('LevelSelect');
        this.selectedLevel = null;
    }

    preload() {
        this.load.image('spaceBackground', 'assets/space.png');
        this.load.image('level1Button', 'assets/level1.png');
        this.load.image('level2Button', 'assets/level2.png');
        this.load.image('level3Button', 'assets/level3.png');
        this.load.image('level4Button', 'assets/level4.png');
        this.load.image('level5Button', 'assets/level5.png');
        this.load.audio('selectSound', 'assets/select.wav');
        this.load.audio('backSound', 'assets/back.wav');
        this.load.audio('planetMusic', 'assets/planet.mp3');
    }

    create(data) {
        this.selectedPlayer = data.selectedPlayer;
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        this.background = this.add.image(0, 0, 'spaceBackground').setOrigin(0, 0);
        this.background.setDisplaySize(this.game.config.width, this.game.config.height);

        const level1Button = this.add.image(250, 300, 'level1Button').setInteractive();
        const level2Button = this.add.image(450, 300, 'level2Button').setInteractive();
        const level3Button = this.add.image(650, 300, 'level3Button').setInteractive();
        const level4Button = this.add.image(850, 300, 'level4Button').setInteractive();
        const level5Button = this.add.image(1050, 300, 'level5Button').setInteractive();
        this.planetMusic = this.sound.add('planetMusic', { volume: 1.5, loop: true });
        this.planetMusic.play();
        const selectSound = this.sound.add('selectSound');
        this.backSound = this.sound.add('backSound');
        level1Button.on('pointerdown', () => {
            selectSound.play();
            this.selectedLevel = {
                bg: 'bg',
                music: 'music'
            };
            this.startGame();
            this.planetMusic.stop();
        });
        
        level2Button.on('pointerdown', () => {
            selectSound.play();
            this.selectedLevel = {
                bg: 'bg2',
                music: 'music2'
            };
            this.startGame();
            this.planetMusic.stop();
        });
        
        level3Button.on('pointerdown', () => {
            selectSound.play();
            this.selectedLevel = {
                bg: 'bg3',
                music: 'music3'
            };
            this.startGame();
            this.planetMusic.stop();
        });

        level4Button.on('pointerdown', () => {
            selectSound.play();
            this.selectedLevel = {
                bg: 'bg4',
                music: 'music4'
            };
            this.startGame();
            this.planetMusic.stop();
        });

        level5Button.on('pointerdown', () => {
            selectSound.play();
            this.selectedLevel = {
                bg: 'bg5',
                music: 'music5'
            };
            this.startGame();
            this.planetMusic.stop();
        });

        this.input.keyboard.on('keydown-ESC', () => {
            this.backSound.play();
            this.scene.start('PlayerSelect');
            this.planetMusic.stop();
        });
    }

    startGame() {
        this.scene.start('StarWarsRS', {
            selectedPlayer: this.selectedPlayer,
            selectedLevel: this.selectedLevel
        });
    }
}

class StarWarsRS extends Phaser.Scene {
    constructor() {
        super('StarWarsRS');
    }

    preload() {
        this.load.image('bg', 'assets/bg.jpeg');
        this.load.image('player', 'assets/player.png');
        this.load.image('player2', 'assets/player2.png');
        this.load.image('player3', 'assets/player3.png');
        this.load.image('player4', 'assets/player4.png');
        this.load.image('player5', 'assets/player5.png');
        this.load.image('player6', 'assets/player6.png');
        this.load.image('player7', 'assets/player7.png');
        this.load.image('player8', 'assets/player8.png');
        this.load.image('player9', 'assets/player9.png');
        this.load.image('tie', 'assets/tie.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.audio('shootSound', 'assets/shoot.wav');
        this.load.audio('music', 'assets/music.mp3');
        this.load.audio('enemyHitSound', 'assets/hit.wav');
        this.load.audio('extraLifeSound', 'assets/extra-life.wav');
        this.load.audio('playerHitSound', 'assets/player-hit.wav');
        this.load.audio('gameOverSound', 'assets/game-over.wav');
        this.load.image('tie2', 'assets/tie2.png');
        this.load.image('enemyBullet', 'assets/enemy-bullet.png');
        this.load.audio('enemyShootSound', 'assets/enemy-shoot.wav');
        this.load.image('bg2', 'assets/bg2.jpeg');
        this.load.image('bg3', 'assets/bg3.jpeg');
        this.load.image('bg4', 'assets/bg4.jpeg');
        this.load.image('bg5', 'assets/bg5.jpeg');
        this.load.audio('music2', 'assets/music2.mp3');
        this.load.audio('music3', 'assets/music3.mp3');
        this.load.audio('music4', 'assets/music4.mp3');
        this.load.audio('music5', 'assets/music5.mp3');
        this.load.image('explosion', 'assets/explosion.png');
        this.load.audio('backSound', 'assets/back.wav');
    }

    create(data) {
        const selectedPlayer = data.selectedPlayer || 'player';
        const selectedLevel = data.selectedLevel || { bg: 'bg', music: 'music' };
    
        const background = this.add.image(0, 0, selectedLevel.bg).setOrigin(0, 0).setDisplaySize(this.game.config.width, this.game.config.height);
        this.backSound = this.sound.add('backSound');
        try {
            this.bgMusic = this.sound.add(selectedLevel.music, { volume: 1.5, loop: true });
            this.bgMusic.play().catch(() => {
                this.input.once('pointerdown', () => {
                    this.bgMusic.play();
                });
            });
        } catch (e) {
            console.warn('Error cargando música de fondo:', e);
        }

        try {
            this.extraLifeSound = this.sound.add('extraLifeSound', { volume: 0.5 });
            this.playerHitSound = this.sound.add('playerHitSound', { volume: 0.5 });
        } catch (e) {
            console.warn('Error cargando sonidos de vida extra o golpe:', e);
        }

        try {
            this.shootSound = this.sound.add('shootSound', { volume: 0.5 });
        } catch (e) {
            console.warn('Error cargando sonido de disparo:', e);
        }

        try {
            this.enemyHitSound = this.sound.add('enemyHitSound', { volume: 0.5 });
        } catch (e) {
            console.warn('Error cargando sonido de impacto a enemigo:', e);
        }

        this.gameOverSound = this.sound.add('gameOverSound', { volume: 0.6 });

        this.player = this.physics.add.sprite(400, 300, selectedPlayer).setCollideWorldBounds(true);
        this.player.direction = 'up';

        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.enemies = this.physics.add.group();
        this.bullets = this.physics.add.group();

        this.strongEnemies = this.physics.add.group();
        this.enemyBullets = this.physics.add.group();

        this.enemyShootSound = this.sound.add('enemyShootSound', { volume: 0.5 });
        this.strongEnemyTimerStarted = false;

        this.enemyTimer = this.time.addEvent({
            delay: 2000,
            callback: this.spawnEnemy,
            callbackScope: this,
            loop: true,
        });

        this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, null, this);
        this.physics.add.overlap(this.bullets, this.strongEnemies, this.hitStrongEnemy, null, this);
        this.physics.add.overlap(this.strongEnemies, this.player, this.playerHit, null, this);
        this.physics.add.overlap(this.enemies, this.player, this.playerHit, null, this);
        this.physics.add.overlap(this.enemyBullets, this.player, this.playerHitByBullet, null, this);

        this.score = 0;
        this.lives = 3;
        this.extraLifeScore = 100;

        this.scoreText = this.add.text(10, 10, 'Puntuacion: 0', {
            fontFamily: "'Star Wars', sans-serif",
            fontSize: '20px',
            fill: '#fff',
        });
        this.livesText = this.add.text(10, 40, 'Vidas: 3', {
            fontFamily: "'Star Wars', sans-serif",
            fontSize: '20px',
            fill: '#fff',
        });
        this.input.keyboard.on('keydown-ESC', () => {
            this.backSound.play();
            this.scene.start('PlayerSelect');
            this.bgMusic.stop();
        });
    }

    update() {
        const speed = 200;
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.direction = 'left';
            this.player.angle = -90;
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.direction = 'right';
            this.player.angle = 90;
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            this.player.direction = 'up';
            this.player.angle = 0;
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            this.player.direction = 'down';
            this.player.angle = 180;
        }

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.shootBullet();
        }

        this.enemies.children.iterate((enemy) => {
            if (enemy) {
                const deltaX = this.player.x - enemy.x;
                const deltaY = this.player.y - enemy.y;

                let moveX = 0;
                let moveY = 0;
                let enemyAngle = 0;

                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    if (deltaX > 0) {
                        moveX = 50;
                        enemyAngle = -90;
                    } else {
                        moveX = -50;
                        enemyAngle = 90;
                    }
                } else {
                    if (deltaY > 0) {
                        moveY = 50;
                        enemyAngle = 360;
                    } else {
                        moveY = -50;
                        enemyAngle = 180;
                    }
                }

                enemy.setVelocity(moveX, moveY);
                enemy.angle = enemyAngle;
            }
        });

        this.strongEnemies.children.iterate((enemy) => {
            if (enemy && this.player) {
                const deltaX = this.player.x - enemy.x;
                const deltaY = this.player.y - enemy.y;
        
                let moveX = 0;
                let moveY = 0;
                let enemyAngle = 0;
        
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    if (deltaX > 0) {
                        moveX = 40;
                        enemyAngle = -90;
                    } else {
                        moveX = -40;
                        enemyAngle = 90;
                    }
                } else {
                    if (deltaY > 0) {
                        moveY = 40;
                        enemyAngle = 360;
                    } else {
                        moveY = -40;
                        enemyAngle = 180;
                    }
                }
        
                enemy.setVelocity(moveX, moveY);
                enemy.angle = enemyAngle;
            }
        });
    }

    shootBullet() {
        let bulletTexture = 'bullet';
        let shootSoundEffect = this.shootSound;

        if (this.player.texture.key === 'player9') {
            bulletTexture = 'enemyBullet';
            shootSoundEffect = this.enemyShootSound;
        }

        const bullet = this.bullets.create(this.player.x, this.player.y, bulletTexture).setAngle(this.player.angle);
        shootSoundEffect.play();
        const speed = 300;
        switch (this.player.direction) {
            case 'left':
                bullet.setVelocityX(-speed);
                break;
            case 'right':
                bullet.setVelocityX(speed);
                break;
            case 'up':
                bullet.setVelocityY(-speed);
                break;
            case 'down':
                bullet.setVelocityY(speed);
                break;
        }
    }

    spawnEnemy() {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(0, 600);
        this.enemies.create(x, y, 'tie');
    }

    spawnStrongEnemy() {
        const x = Phaser.Math.Between(0, this.game.config.width);
        const y = Phaser.Math.Between(0, this.game.config.height);
        const enemy = this.strongEnemies.create(x, y, 'tie2');
        enemy.setCollideWorldBounds(true);
    
        enemy.shootTimer = this.time.addEvent({
            delay: 3500,
            callback: () => this.enemyShoot(enemy),
            loop: true,
        });
    }
    

    enemyShoot(enemy) {
        if (!enemy.active || !this.player.active) return;

        const bullet = this.enemyBullets.create(enemy.x, enemy.y, 'enemyBullet');
        this.physics.moveToObject(bullet, this.player, 200);

        if (this.enemyShootSound) this.enemyShootSound.play();
    }

    hitEnemy(bullet, enemy) {
        bullet.destroy();
        enemy.destroy();

        if (this.enemyHitSound) {
            this.enemyHitSound.play();
            const explosion = this.add.image(enemy.x, enemy.y, 'explosion');
            this.time.delayedCall(200, () => {
            explosion.destroy();
});

        }

        this.score += 10;
        this.scoreText.setText('Puntuacion: ' + this.score);

        if (this.score >= 100 && !this.strongEnemyTimerStarted) {
            this.strongEnemyTimerStarted = true;

            this.strongEnemyTimer = this.time.addEvent({
                delay: 4000,
                callback: this.spawnStrongEnemy,
                callbackScope: this,
                loop: true,
            });
        }

        if (this.score >= this.extraLifeScore) {
            this.lives++;
            this.extraLifeScore += 100;
            this.livesText.setText('Vidas: ' + this.lives);

            if (this.extraLifeSound) {
                this.extraLifeSound.play();
            }
        }
    }

    playerHitByBullet(player, bullet) {
        bullet.destroy();

        if (this.playerHitSound) this.playerHitSound.play();

        this.lives--;
        this.livesText.setText('Vidas: ' + this.lives);

        if (this.lives <= 0) {
            this.gameOverSound.play();
            this.physics.pause();
            player.setTint(0xff0000);
            this.add.text(300, 250, 'game over', {
                fontFamily: "'Star Wars', sans-serif",
                fontSize: '100px',
                fill: '#fff',
            });

            if (this.bgMusic && this.bgMusic.isPlaying) {
                this.bgMusic.stop();
            }

            const menuButton = this.add.text(320, 350, 'ESC para volver menu o espacio para volver a jugar', {
                fontFamily: "'Star Wars', sans-serif",
                fontSize: '15px',
                fill: '#fff',
            }).setInteractive();

            this.input.keyboard.on('keydown-SPACE', () => {
                this.scene.restart();
            });

            menuButton.on('pointerdown', () => {
                this.scene.start('PlayerSelect');
            });
        }
    }

    hitStrongEnemy(bullet, enemy) {
        bullet.destroy();
        enemy.destroy();
        const explosion = this.add.image(enemy.x, enemy.y, 'explosion');
        this.time.delayedCall(200, () => {
        explosion.destroy();
});


        if (enemy.shootTimer) {
            enemy.shootTimer.remove();
        }

        if (this.enemyHitSound) {
            this.enemyHitSound.play();
        }

        this.score += 20;
        this.scoreText.setText('Puntuacion: ' + this.score);

        if (this.score >= this.extraLifeScore) {
            this.lives++;
            this.extraLifeScore += 100;
            this.livesText.setText('Vidas: ' + this.lives);

            if (this.extraLifeSound) {
                this.extraLifeSound.play();
            }
        }
    }

    playerHit(player, enemy) {
        enemy.destroy();
        const explosion = this.add.image(enemy.x, enemy.y, 'explosion');
        this.time.delayedCall(200, () => {
        explosion.destroy();
    });
        if (this.playerHitSound) {
            this.playerHitSound.play();
        }

        this.lives--;
        this.livesText.setText('Vidas: ' + this.lives);

        if (this.lives <= 0) {
            if (this.gameOverSound) {
                this.gameOverSound.play();
            }
            this.physics.pause();
            player.setTint(0xff0000);
            this.add.text(300, 250, 'game over', {
                fontFamily: "'Star Wars', sans-serif",
                fontSize: '100px',
                fill: '#fff',
            });

            if (this.bgMusic && this.bgMusic.isPlaying) {
                this.bgMusic.stop();
            }

            const menuButton = this.add.text(320, 350, 'ESC para volver menu o espacio para volver a jugar', {
                fontFamily: "'Star Wars', sans-serif",
                fontSize: '15px',
                fill: '#fff',
            }).setInteractive();

            this.input.keyboard.on('keydown-SPACE', () => {
                this.scene.restart();
            });

            menuButton.on('pointerdown', () => {
                this.scene.start('PlayerSelect');
            });
        }
    }
}

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    scene: [MainMenu, PlayerSelect, LevelSelect, StarWarsRS],
};

const game = new Phaser.Game(config);