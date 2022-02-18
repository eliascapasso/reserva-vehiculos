import React from 'react';
import Box, {
    Item,
} from 'devextreme-react/box';
import Button from 'devextreme-react/button';

export class InspectionPage extends React.Component {
    render() {
    return (

        <React.Fragment>
            <Box
                direction="row"
                width="50%"
                height={75}>
                <Item ratio={1}>
                    <Button icon="menu" stylingMode="text"  />
                </Item>
                <Item ratio={2}>
                    <div className="rect demo-light">
                        Ficha de Inspeccion
                    </div>
                </Item>
                <Item ratio={1}>
                    <Button icon="menu" stylingMode="text" />
                </Item>
            </Box>
            <br />
            <Box>
                <Item>
                    <div className="rect demo-light">
                        Kilometraje
                    </div>
                    <input type="text" ></input>
                </Item>
            </Box>
            <br />
            <Box
                direction="row"
                width="50%"
                height={175}>
                <Item>
                    <input type="checkbox" />
                        Cubiertas                    
                </Item>
                <Item>
                    <input type="checkbox" />
                        Luces                    
                </Item>
                {/* <Item>
                    <input type="checkbox" />
                        Sin choque                    
                </Item>
                <Item>
                    <input type="checkbox" />
                        Aceite                    
                </Item>
                <Item>
                    <input type="checkbox" />
                        Agua                    
                </Item>       
               
                */}
            </Box>
            <br />
            <Box
                direction="col"
                width="100%"
                height={250}>
                <Item ratio={1}>
                    <div className="rect demo-dark header">
                        Observaciones
                    </div>
                </Item>
                <Item
                    ratio={2}
                    baseSize={0}>
                    <Box
                        direction="row"
                        width="100%"
                        height={125}>
                        <Item ratio={1}>
                            <div className="rect demo-dark">
                                Left Bar
                            </div>
                        </Item>
                        <Item ratio={1}>
                            <div className="rect demo-light">
                                Content
                            </div>
                        </Item>
                        <Item ratio={1}>
                            <div className="rect demo-dark">
                                Right Bar
                            </div>
                        </Item>
                    </Box>
                </Item>
                <Item ratio={1}>
                    <div className="rect demo-dark footer">
                        Footer
                    </div>
                </Item>
            </Box>
        </React.Fragment>
    )
}

}