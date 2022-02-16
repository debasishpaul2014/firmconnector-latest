import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SearchResultBlock from "./SearchResultBlock";
import SearchLeftBlock from "./SearchLeftBlock";
import getSearchAutoComplete from "../../apis/getSearchAutoComplete";
import getSearchResult from "../../apis/getSearchResult";

const SearchBottomBlock = (props) => {
  const { user_slug } = props;
  const [searchText, setSearchText] = useState("");
  const [isKeywordChanging, setIsKeywordChanging] = useState(false);
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [suggestionList, setSuggestionList] = useState(false);
  const [selectedFirmList, setSelectedFirmList] = useState([]);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  const [searchResult, setSearchResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [ownFirm, setOwnFirm] = useState(false);
  const [accessFirm, setAccessFirm] = useState(false);

  useEffect(() => {
    if (searchText.trim().length > 2) {
      setIsSearchButtonDisabled(false);
    } else {
      setIsSearchButtonDisabled(true);
    }
  }, [searchText, isKeywordChanging, isAutoCompleteVisible]);

  useEffect(() => {}, [isSearching, searchResult]);

  useEffect(() => {
    getSearch();
  }, [selectedFirmList]);

  const getSelectedFirmIds = (firmIds) => {
    setSelectedFirmList(firmIds);
  };

  const getFirmAccess = async (ownFirm, accessFirm) => {
    await setOwnFirm(ownFirm);
    await setAccessFirm(accessFirm);
  };

  const onKeyworkChange = (e) => {
    let keyword = e.target.value;

    if (keyword.trim().length > 0) {
      if (keyword.trim().length > 2) {
        setIsKeywordChanging(true);
        setIsAutoCompleteVisible(true);
        setSearchText(keyword);

        getAutoCompleteResult(keyword);
      } else {
        setSearchText(keyword);
        setIsKeywordChanging(false);
        setIsAutoCompleteVisible(false);
      }
    } else {
      setIsKeywordChanging(false);
      setIsAutoCompleteVisible(false);
      setSearchText("");
    }
  };

  const getAutoCompleteResult = (keyword) => {
    Promise.all([getSearchAutoComplete(keyword)])
      .then(async ([data]) => {
        if (data?.data?.suggestionList) {
          setSuggestionList(data?.data?.suggestionList);
          setIsKeywordChanging(false);
        } else {
          setIsKeywordChanging(false);
          setSuggestionList(false);
          setIsAutoCompleteVisible(false);
        }
      })
      .catch((err) => {
        setIsKeywordChanging(false);
        setSuggestionList(false);
        setIsAutoCompleteVisible(false);
        console.log(err);
      });
  };

  const getSearch = () => {
    if (searchText.trim().length > 2) {
      setSearchResult(false);
      setIsSearching(true);
      setIsAutoCompleteVisible(false);

      Promise.all([getSearchResult(searchText, selectedFirmList, user_slug)])
        .then(async ([data]) => {
          if (data?.data?.searchResult) {
            setIsSearching(false);
            setSearchResult(data?.data?.searchResult);
          } else {
            setIsSearching(false);
            setSearchResult(false);
          }
        })
        .catch((err) => {
          setIsSearching(false);
          setSearchResult(false);
          console.log(err);
        });
    }
  };

  const displayAutoCompleteBlock = () => {
    if (isAutoCompleteVisible) {
      return (
        <div className="search-auto-complete-block col-12 mt-1 shadow-sm">
          {autoCompleteBlock()}
        </div>
      );
    }
  };

  const autoCompleteBlock = () => {
    if (isKeywordChanging) {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <span>Loading suggestions</span>
        </div>
      );
    } else {
      return displayAutoCompleteResult();
    }
  };

  const updateSearchText = (text) => {
    setIsKeywordChanging(false);
    setSuggestionList(false);
    setIsAutoCompleteVisible(false);
    setSearchText(text);
  };

  const displayAutoCompleteResult = () => {
    if (suggestionList) {
      return (
        <>
          {suggestionList.map(function (item, index) {
            return (
              <div
                className="d-block p-2 bg-light mb-1 cursor-pointer"
                key={index.toString()}
                onClick={() => updateSearchText(item.name)}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <div className="d-block mb-4">
      <div className="d-flex col-12 mb-5 align-items-center justify-content-center">
        <div className="col-11 col-lg-8 col-xl-8 col-xxl-8 position-relative">
          <div className="search-sm-block d-flex align-items-center">
            <div className="d-flex col-12 row mx-0">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Search for resorces/skills/country/city/state"
                  className="form-control-custom-sm-border-none text-md-custom text-capitalize"
                  onChange={onKeyworkChange}
                  value={searchText}
                />
              </div>
              <div className="col-3 d-flex justify-content-end align-items-center">
                <div className="search-btn-sm-holder">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => getSearch()}
                    disabled={isSearchButtonDisabled}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {displayAutoCompleteBlock()}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 h-100">
        <div className="row col-12 mx-0">
          <div className="d-none d-lg-flex d-xl-flex d-xxl-flex col-lg-3 col-xl-3 col-xxl-3">
            <SearchLeftBlock
              user_slug={user_slug}
              getSelectedFirmIds={getSelectedFirmIds}
              getFirmAccess={getFirmAccess}
            />
          </div>
          <div className="col-12 col-lg-9 col-xl-9 col-xxl-9">
            <SearchResultBlock
              isSearching={isSearching}
              searchResult={searchResult}
              ownFirm={ownFirm}
              accessFirm={accessFirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBottomBlock;
