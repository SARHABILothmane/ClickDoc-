import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import ListMedecin from '../views/admin/listMedecin';
import ListSpicialite from '../views/admin/listSpicialite';
import ListPatient from '../views/admin/listePatient';
import Sidebar from '../component/admin/sidebar'
import routes from '../component/admin/routes'

export default class admin extends Component {
    render() {
        return (
            <div>
                <Sidebar routes={routes} />
                <section className="main-site">
                    <Switch>
                        <Route exact path="/admin/medecins" component={ListMedecin} />
                        <Route exact path="/admin/specialite" component={ListSpicialite} />
                        <Route exact path="/admin/patient" component={ListPatient} />
                    </Switch>
                                 
                </section>
            </div>
        )
    }
}
