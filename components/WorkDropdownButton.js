import React from "react";
import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-scroll";

function WorkDropdownButton({ title, jobs }) {
  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={title}
        id="bg-nested-dropdown"
        variant="success"
        size="sm"
      >
        {jobs.map((job, index) => {
          return (
            <Link
              as={<Dropdown.Item />}
              duration={200}
              key={job}
              to={(index + 1).toString()}
              smooth={true}
              offset={-100}
            >
              <Dropdown.Item>{job}</Dropdown.Item>
            </Link>
          );
        })}
      </DropdownButton>
    </ButtonGroup>
  );
}

export default WorkDropdownButton;
