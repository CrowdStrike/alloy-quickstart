#!/usr/bin/env python3
import yaml

def remove_ids(data):
    if isinstance(data, dict):
        # Remove 'id' from current dict
        data.pop('id', None)
        # Remove 'app_id' from root level
        data.pop('app_id', None)
        # Recursively process all values in the dict
        for key, value in list(data.items()):
            data[key] = remove_ids(value)
    elif isinstance(data, list):
        # Recursively process all items in the list
        return [remove_ids(item) for item in data]
    return data

def main():
    # Read the YAML file
    with open('manifest.yml', 'r') as file:
        data = yaml.safe_load(file)

    # Remove IDs
    cleaned_data = remove_ids(data)

    # Write back to the file
    with open('manifest.new.yml', 'w') as file:
        yaml.dump(cleaned_data, file, sort_keys=False, default_flow_style=False)

if __name__ == "__main__":
    main()
