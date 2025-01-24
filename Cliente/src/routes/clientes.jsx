import React from "react";
import "../style/clientes.css";
import linkedin from "../imgs/ico/linkedin-g.png";
import facebook from "../imgs/ico/facebook-g.png";
import instagram from "../imgs/ico/instagram-g.png";

import a from "../imgs/cli/a.png";
import b from "../imgs/cli/b.png";
import c from "../imgs/cli/c.png";
import d from "../imgs/cli/d.png";
import e from "../imgs/cli/e.png";
import f from "../imgs/cli/f.png";
import g from "../imgs/cli/g.png";
import h from "../imgs/cli/h.png";
import i from "../imgs/cli/i.png";
import j from "../imgs/cli/j.png";
import k from "../imgs/cli/k.png";
import l from "../imgs/cli/l.png";
import m from "../imgs/cli/m.png";
import n from "../imgs/cli/n.png";
import o from "../imgs/cli/o.png";
import p from "../imgs/cli/p.png";
import q from "../imgs/cli/q.png";
import r from "../imgs/cli/r.png";
import s from "../imgs/cli/s.png";
import t from "../imgs/cli/t.png";
import u from "../imgs/cli/u.png";
import v from "../imgs/cli/v.png";
import w from "../imgs/cli/w.png";
import x from "../imgs/cli/x.png";
import y from "../imgs/cli/y.png";
import z from "../imgs/cli/z.png";
import uno from "../imgs/cli/uno.png";
import dos from "../imgs/cli/dos.png";
import tres from "../imgs/cli/tres.png";
import cuatro from "../imgs/cli/cuatro.png";

import boomstudio from "../imgs/ptr/boomstudio.png";
import ecofold from "../imgs/ptr/ecofold.png";
import ecoprint from "../imgs/ptr/ecoprint.png";
import graficatucuman from "../imgs/ptr/graficatucuman.png";
import root from "../imgs/ptr/root.png";
import sapyd from "../imgs/ptr/sapyd.png";
import wooprom from "../imgs/ptr/wooprom.png";
import rhbg from "../imgs/others/rhbg.jpg";

export default function Clientes() {
    const cImgs = [
        a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, 
        u, v, w, x, y, z, uno, dos, tres, cuatro
    ];

    return (
        <div className="clients-container">
        <div className="clients-follow">
            <h2>SEGUINOS EN NUESTRAS REDES SOCIALES</h2>
            <ul className="follow-imgs">
                <li className="follow-li-imgs-1">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt='linkedin-grey-ico' className="img-fluid"/>
                    </a>
                </li>
                <li className="follow-li-imgs-2">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt='facebook-grey-ico' className="img-fluid"/>
                    </a>
                </li>
                <li className="follow-li-imgs-3">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='instagram-grey-ico' className="img-fluid"/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="clients-inner">
            <h1 className="clientes-h1">CLIENTES</h1>
            <h2>Estas empresas ya confían en nosotros.</h2>
            <div className="row">
                    {cImgs.map((img, index) => (
                        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <img src={img} alt={`client-${index + 1}`} className="img-fluid shadow rounded" />
                        </div>
                    ))}
                </div>
        </div>
        <div className="clients-sc">
                <img src={rhbg} alt="rhbg" className="clients-sc-bg"/>
                <p className="clients-sc-p"> ¿ESTÁS LISTO PARA EMBARCARTE CON NOSOTROS?</p>
                <div className="partners-inner">
                    <h1 className="clientes-h1">PARTNERS</h1>
                    <div className="partners-list">
                        {[wooprom, graficatucuman, ecofold, root, ecoprint, boomstudio, sapyd].map((partner, index) => (
                            <div key={index} className="partners-list-img">
                                <img src={partner} alt={`partner-${index + 1}`} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                    <h1 className="clientes-h1">CONTACTO</h1>
                </div>
        </div>
    </div>
    );
}