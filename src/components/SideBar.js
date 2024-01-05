import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import { UserIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'; // Import Link from React Router

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4 text-center">
        <Typography variant="h5" color="blue-gray">
          Logo
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <Link to="/students">
              <UserIcon className="h-5 w-5" />
            </Link>
          </ListItemPrefix>
          <Link to="/students">Students</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Link to="/dashboard"> {/* Update the route to "/dashboard" */}
              <UserCircleIcon className="h-5 w-5" />
            </Link>
          </ListItemPrefix>
          <Link to="/dashboard">Attendance</Link>
        </ListItem>
        <ListItem className="fixed bottom-8 text-xl font-bold">
          <Link to="/logout">Logout</Link>
        </ListItem>
      </List>
    </Card>
  );
}
