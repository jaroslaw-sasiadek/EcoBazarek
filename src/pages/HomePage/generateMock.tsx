export function generateMock() {
	const mockItems = [];
	for (let index = 0; index < 12; index++) {
		mockItems.push(
			<li key={index} className="w-[248px] h-[275px] bg-c5 rounded-[16px]"></li>
		);
	}
	return mockItems;
}
