import Home from './components/home/Home';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Tasks from './components/Tasks/Tasks';
import AuthState from './context/authContext/AuthState';
import TaskState from './context/tasksContext/TaskState';

function App() {
	return (
		<AuthState>
			<TaskState>
				<div className='flex flex-col h-screen'>
					<header>
						<Navbar />
					</header>

					<main className='container mx-auto flex-grow'>
						<Home />

						<Tasks />
					</main>

					<footer>
						<Footer />
					</footer>
				</div>
			</TaskState>
		</AuthState>
	);
}

export default App;
