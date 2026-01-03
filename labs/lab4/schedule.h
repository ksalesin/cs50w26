
// Read availability from a text file and populate a Schedule data structure
int read_schedule_from_file(const char* filename, Schedule* person);

// Find common available time slots across multiple schedules and return a common Schedule
Schedule* find_common_availability(Schedule* people_schedules, int num_people);

// Rank time slots based on number of people available and provide ranked time slots
int rank_time_slots(Schedule* people, int num_people, Schedule* ranked_slots);

// Output results to a file
void write_availability_to_file(const char* filename, Schedule* slots);

// Pretty print availability in a table format
void print_availability_table(Schedule* slots);

