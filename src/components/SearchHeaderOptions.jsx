export default function SearchHeaderOptions() {
    return (
        <div className="flex space-x-6 text-gray-700 text-sm">
            <div className="flex space-x-4">
                <p className="link">All</p>
                <p className="link">Images</p>
                <p className="link">News</p>
                <p className="link">Videos</p>
                <p className="link">Maps</p>
                <p className="link">More</p>
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}