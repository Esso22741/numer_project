import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import './index.css';

const Menubar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="secondary" light expand="md" className="hig">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Root of Equation</b>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem tag={Link} to="/bisection">
                      Bisection
                </DropdownItem>
                <DropdownItem>
                
                       False Position
                
                </DropdownItem>
                <DropdownItem tag={Link} to="/onepointiteration">
               
                       One-point Iteration
             
                </DropdownItem>
                <DropdownItem tag={Link} to="/newtonrapson">
               
                      Newton-rapson
               
                </DropdownItem>
                <DropdownItem>
                
                       Secant
              
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Linear Algebraic Equations</b>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                
                       Cramer's Rule
               
                </DropdownItem>
                <DropdownItem>
               
                       Gauss Elimination Method
              
                </DropdownItem>
                <DropdownItem>
               
                        Gauss-Jordan
              
                </DropdownItem>
                <DropdownItem>
               
                       Matrix Inversion
               
                </DropdownItem>
                <DropdownItem>
               
                      LU Decomposition
              
                </DropdownItem>
                <DropdownItem>
                
                       Jacorbi Iteration
                
                </DropdownItem>
                <DropdownItem>
              
                      Gauss-Seidel Iteration
              
                </DropdownItem>
                <DropdownItem>
                
                     LU Conjugate Gradient
               
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Interpolation And Extrapolation</b>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
               
                      Newton's Divided-Differences
               
                </DropdownItem>
                <DropdownItem>
               
                       Lagange Polynomial
                
                </DropdownItem>
                <DropdownItem>
                
                       Spline Interpolation
               
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Least-squares Regression</b>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                
                       Polynomial Regression
               
                </DropdownItem>
                <DropdownItem>
               
                        Multiple Regression
                
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Numerical Integration</b>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
               Trapzoidal's Rule
                </DropdownItem>
                <DropdownItem>
               Composite Trapzoidal's Rule
                </DropdownItem>
                <DropdownItem>
                </DropdownItem>
                <DropdownItem>
               Composite Simson's Rule
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <b>Numerical Differntion</b>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                Forward Divided
                </DropdownItem>
                <DropdownItem>
                 Backward Devided
                </DropdownItem>
                <DropdownItem>
                Center Divided
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Numerical Method</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menubar;