var kg1 = document.getElementById('key1');
var kg2 = document.getElementById('key2');
var kg3 = document.getElementById('key3');
var kg4 = document.getElementById('key4');
var kg5 = document.getElementById('key5');
var kg6 = document.getElementById('key6');
var kg7 = document.getElementById('key7');
var kg8 = document.getElementById('key8');
var sg1 = document.getElementById('key9');
var sg2 = document.getElementById('key10');
var sg3 = document.getElementById('key11');
var sg4 = document.getElementById('key12');
var sg5 = document.getElementById('key13');
var sg6 = document.getElementById('key14');
var sg7 = document.getElementById('key15');
var sg8 = document.getElementById('key16');
var rg1 = document.getElementById('key17');
var rg2 = document.getElementById('key18');
var rg3 = document.getElementById('key19');
var rg4 = document.getElementById('key20');
var rg5 = document.getElementById('key21');
var rg6 = document.getElementById('key22');
var rg7 = document.getElementById('key23');
var rg8 = document.getElementById('key24');
var bg1 = document.getElementById('key25');
var bg2 = document.getElementById('key26');
var bg3 = document.getElementById('key27');
var bg4 = document.getElementById('key28');
var bg5 = document.getElementById('key29');
var bg6 = document.getElementById('key30');
var bg7 = document.getElementById('key31');
var bg8 = document.getElementById('key32');
var pg1 = document.getElementById('key33');
var pg2 = document.getElementById('key34');
var pg3 = document.getElementById('key35');
var pg4 = document.getElementById('key36');
var hhg1 = document.getElementById('key37');
var hhg2 = document.getElementById('key38');
var hhg3 = document.getElementById('key39');
var hhg4 = document.getElementById('key40');
var cg1 = document.getElementById('key41');
var cg2 = document.getElementById('key42');
var cg3 = document.getElementById('key43');
var cg4 = document.getElementById('key44');

var keys = [kg1, kg2, kg3, kg4, kg5, kg6, kg7, kg8];
var snare = [sg1, sg2, sg3, sg4, sg5, sg6, sg7, kg8];
var rhythm = [rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8];
var bass = [bg1, bg2, bg3, bg4, bg5, bg6, bg7,];

var allkeys = [keys, snare, rhythm, bass];

var kick1 = new Audio('kicks\\kick1.wav');
var kick2 = new Audio('kicks\\kick2.wav');
var kick3 = new Audio('kicks\\kick3.wav');
var snare1 = new Audio('snares\\snare1.wav');
var snare2 = new Audio('snares\\snare2.wav');
var snare3 = new Audio('snares\\snare3.wav');
var snare4 = new Audio('snares\\snare4.wav');
var snare5 = new Audio('snares\\snare5.wav');
var snare6 = new Audio('snares\\snare6.wav');
var bass = new Audio('808\\808(1).wav');
var bass1 = new Audio('808\\808(2).wav');
var bass2 = new Audio('808\\808(3).wav');
var bass3 = new Audio('808\\808(4).wav');
var bass4 = new Audio('808\\808(5).wav');
var perc1 = new Audio('perc\\cymbal.wav');
var perc2 = new Audio('perc\\shaker.wav');
var perc3 = new Audio('perc\\tamb.wav');
var perc4 = new Audio('perc\\tom.wav');
var hats1 = new Audio('hihats\\hihat(1).wav');
var hats2 = new Audio('hihats\\hihat.wav');
var claps1 = new Audio('claps\\clap1.wav')
var claps2 = new Audio('claps\\clap2.wav')
var claps3 = new Audio('claps\\clap3.wav')
var claps4 = new Audio('claps\\clap4.wav')


console.log('js connected');

var keyused = 0;
console.log(keyused)



kg1.onclick = function (){
	kick1.play();
	
};

kg2.onclick = function(){
	kick2.play()
};

kg3.onclick = function(){
	kick3.play()
};

sg1.onclick = function (){
	snare1.play();
	
};

sg2.onclick = function (){
	snare2.play();
	
};
sg3.onclick = function (){
	snare3.play();
	
};
sg4.onclick = function (){
	snare4.play();
	
};
sg5.onclick = function (){
	snare5.play();
	
};
sg6.onclick = function (){
	snare6.play();
	
};
bg1.onclick = function (){
	bass.play();
	
};
bg2.onclick = function (){
	bass1.play();
	
};
bg3.onclick = function (){
	bass2.play();
	
};
bg4.onclick = function (){
	bass3.play();
	
};
bg5.onclick = function (){
	bass4.play();
};
pg1.onclick = function (){
	perc1.play();
};
pg2.onclick = function (){
	perc2.play();
};
pg3.onclick = function (){
	perc3.play();
};
pg4.onclick = function (){
	perc4.play();
};
hhg1.onclick = function (){
	hats1.play();
};
hhg2.onclick = function (){
	hats2.play();
};
cg1.onclick = function (){
	claps1.play();
};
cg2.onclick = function (){
	claps2.play();
};
cg3.onclick = function (){
	claps3.play();
};
cg4.onclick = function (){
	claps4.play();
};

