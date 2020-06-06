# debugger;
@walks.each do |walk|
    json.set! walk.id do
        # debugger;
        json.partial! 'api/walks/walk', walk: walk
        # debugger;
    end
    # debugger;
end