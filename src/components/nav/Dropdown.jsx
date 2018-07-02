import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// styled
import styled from "styled-components";

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;
const DropdownList = styled.ul`
  padding: 1%;
  float: left;
  position: absolute;
  background: #fbfbfb;
  column-count: 3;
  color: #2b2b2b;
  z-index: 2;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
  }
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper">
        <DropdownHeader onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? (
            <FontAwesomeIcon
              icon={faAngleUp}
              size="2x"
              style={{ marginLeft: "3%" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleDown}
              size="2x"
              style={{ marginLeft: "3%" }}
            />
          )}
        </DropdownHeader>

        {listOpen && (
          <DropdownList>
            {list.map(item => (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={() => this.props.toggleItem(item.id, item.name)}
              >
                {item.name}
              </li>
            ))}
          </DropdownList>
        )}
      </div>
    );
  }
}

export default Dropdown;
