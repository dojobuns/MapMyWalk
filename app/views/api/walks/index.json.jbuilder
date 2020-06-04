@walks.each do |walk|
    json.set! walk.id do
        json.partial! 'api/walks/walk', walk: walk
    end
end