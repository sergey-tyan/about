import React from "react"

const countAge = () => {
    const birthday = new Date(92, 3, 2);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default () =>
    <div>
        <h1>Bio</h1>
        <p style={{float: "left", marginRight: 10}}>
            <img style={{width:'150'}}
                 src="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/13267723_1215058188507024_2141511007308670259_n.jpg?oh=317b930aabec44c005e40f0e1029b647&oe=5A2BD79D"
                 align="left"
                 hspace="50" vspace="50"
            />
        </p>
        <p style={{marginLeft: 10}}>
            My name is Sergey Tyan. I'm {countAge()} years old Full-Stack Software Developer. <br/>

        </p>
    </div>