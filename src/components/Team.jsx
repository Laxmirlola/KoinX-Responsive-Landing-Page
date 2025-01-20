import React from "react";
import "./Team.css"; // Import external CSS file

const Team = () => {
  return (
    <div className="team">
      <h2>Team</h2>
      <div className="team-info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas
        provident nesciunt tempore est corporis quibusdam voluptate praesentium
        aliquid quod, quo nam dignissimos doloribus facere dolorum! Delectus
        facere distinctio saepe. Quibusdam tenetur, ipsa voluptatibus blanditiis
        expedita exercitationem quisquam corrupti impedit. Aperiam accusamus
        facere dolorum! Delectus facere distinctio saepe. Quibusdam tenetur,
        ipsa voluptatibus blanditiis expedita exercitationem quisquam corrupti
        impedit. Aperiam accusamus
      </div>
      <br />
      <div className="team-members">
        <div className="team-member">
          <div className="team-profile">
            {" "}
            <div className="team-photo">
              <img
                src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt="profile"
              />
            </div>
            <div>John Doe</div>
            <div style={{ color: "#888" }}>Designation</div>
          </div>
          <div className="team-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            commodi corrupti, odio quasi maxime quae. Architecto sit
            perferendis, quidem deleniti doloribus maiores provident optio
            eligendi voluptatum quo itaque facilis dolores.Architecto sit
            perferendis, quidem deleniti doloribus maiores provident optio
            eligendi voluptatum quo itaque facilis dolores.
          </div>
        </div>
        <div className="team-member">
          <div className="team-profile">
            {" "}
            <div className="team-photo">
              <img
                src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt="profile"
              />
            </div>
            <div>Alex Mark</div>
            <div style={{ color: "#888" }}>Designation</div>
          </div>
          <div className="team-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            commodi corrupti, odio quasi maxime quae. Architecto sit
            perferendis, quidem deleniti doloribus maiores provident optio
            eligendi voluptatum quo itaque facilis dolores.Architecto sit
            perferendis, quidem deleniti doloribus maiores provident optio
            eligendi voluptatum quo itaque facilis dolores.
          </div>
        </div>
        <div className="team-member">
          <div className="team-profile">
            {" "}
            <div className="team-photo">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
              />
            </div>
            <div>Ellie Park</div>
            <div style={{ color: "#888" }}>Designation</div>
          </div>
          <div className="team-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            commodi corrupti, odio quasi maxime quae. Architecto sit
            perferendis, quidem deleniti doloribus maiores provident optio
            eligendi voluptatum quo itaque facilis dolores.Architecto sit
            perferendis, quidem deleniti doloribus maiores provident optio
            eligendi voluptatum quo itaque facilis dolores.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
