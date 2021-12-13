({sin:s,min,max,abs,PI}=Math);
T=PI*2;
L=(N,f)=>[...Array(N)].map((_,i)=>f(i/N));
V=(x,y)=>({x,y});
E=(f,p,a,t)=>(t=f*t*T+p*T,V(a*s(t),a*s(t+T/4)));
A=(p,q,a=1)=>(p.x+=q.x*a,p.y+=q.y*a,p);
H=(p,q)=>(p.x-q.x)**2+(p.y-q.y)**2;
S=Uint32Array.from([9,7,n=t=5,3]);
R=(a=1)=>a*(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=n=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(n>>>19),S[0]/2**32);
[...Date()+'GEN2022'].map(c=>R(S[3]^=c.charCodeAt()*23130));
W=5000;as=5/32;

dbox=({x,y})=>min(.49-abs(x-.5),.4*as-abs(y-.5*as));
sf=L(6,(_,[A,B,C,D]=L(4,R))=>(x,y)=>s(A*x+x+2*s(B*y+y+C*T)+D*T));
r0=R();dt=.003;ww=0.3
ff=({x,y})=>E(ww,r0,1,sf[0](x*3,y*2)+sf[1](y*2,x*3)+sf[2](x,y)+sf[3](y,x));

Q=(x,y,w)=>({x,y,w,p:[]});
Qa=(q,v)=>{let {x,y,w,p}=q;!p[7]<8?p.push(v):(w/=2,q.r?0:q.r=[Q(x+w,y+w,w),Q(x+w,y,w),Q(x,y+w,w),Q(x,y,w)],Qa(q.r[(v.x<x+w)*2+(v.y<y+w)],v))};
Qh=(q,X,Y,W,f)=>X<q.x+q.w&&X+W>q.x&&Y<q.y+q.w&&Y+W>q.y&&(q.p.some(v=>v.x>=X&&v.x<X+W&&v.y>=Y&&v.y<Y+W&&f(v))||q.r&&q.r.some(s=>Qh(s,X,Y,W,f)));

svg=[`<rect width="${W}" height="${W*as}" stroke="none" fill="#034"/>`];
B=Q(0,0,1);
k=999;r=.008;
while (k>0) {
	q={x:R(),y:R(as)};
	pp=[]
	for(d=1;d>-3;d-=2){
		p=q;pp.reverse();
		while(!Qh(B,p.x-r,p.y-r,2*r,v=>H(v,p)<r*r)&&dbox(p)>0){
			pp.push({...p});A(p,ff(p),dt*d)
		}
	}
	if(pp.length>5){
		i=0;
		while(i<pp.length){
			qq=pp.slice(i,(i+=1+R(9)|0)+1);
			svg.push(`<path fill="none" stroke="#${'fff.000.f90.35a'.split('.')[R(4)|0]}" stroke-linecap="square" stroke-width="${r*W*.7}" d="M ${qq.map(p=>(Qa(B,p),[p.x*W|0,p.y*W|0])).join(' ')}"/>`);
		}
	} else k--;

}
document.write(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${W*as|0}" style="font-size: 650; font-weight: bold">
	
	<mask id="M"><text text-anchor="middle" x="${W/2}" y="${W*as*.8|0}" fill="#fff" stroke="#fff" stroke-width="19">GENUARY2022</text></mask>

 <text text-anchor="middle" x="${W/2+25}" y="${W*as*.8+25|0}" fill="#000" stroke="#0008" stroke-width="35">GENUARY2022</text>
 <text text-anchor="middle" x="${W/2}" y="${W*as*.8|0}" fill="none" stroke="#fffa" stroke-width="35">GENUARY2022</text>


	<g mask="url(#M)" >
	${svg.join('\n')}</g>

</svg>`);
