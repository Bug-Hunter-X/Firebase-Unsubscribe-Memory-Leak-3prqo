import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'; // Assuming you have your Firebase config set up

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <p>User is signed in</p> : <p>User is signed out</p> } 
    </div>
  );
}
export default MyComponent; 